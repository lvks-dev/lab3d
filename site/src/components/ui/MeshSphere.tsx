import { cn } from "@/lib/utils";

// Malha wireframe triangulada (Precision Mesh): evolução da esfera do cartão de visita para a
// leitura de "modelo 3D em CAD". Puramente decorativa.

type Vec3 = [number, number, number];

const RADIUS = 100;
const RINGS = 9; // latitude rings between the poles
const SEGMENTS = 20; // vertices per ring
const TILT_X = (-22 * Math.PI) / 180;
const TILT_Y = (28 * Math.PI) / 180;

function rotate([x, y, z]: Vec3): Vec3 {
  const cy = Math.cos(TILT_Y);
  const sy = Math.sin(TILT_Y);
  const x1 = x * cy + z * sy;
  const z1 = -x * sy + z * cy;
  const cx = Math.cos(TILT_X);
  const sx = Math.sin(TILT_X);
  return [x1, y * cx - z1 * sx, y * sx + z1 * cx];
}

/**
 * Builds a lat/long sphere with one diagonal per quad (a triangle mesh), rotated and
 * projected orthographically. Edges are bucketed by depth so the back reads fainter.
 * Runs once at module load — the output is static.
 */
function buildMesh() {
  const vertices: Vec3[] = [rotate([0, -RADIUS, 0])];
  for (let ring = 1; ring <= RINGS; ring++) {
    const phi = (ring / (RINGS + 1)) * Math.PI;
    for (let seg = 0; seg < SEGMENTS; seg++) {
      const theta = (seg / SEGMENTS) * Math.PI * 2;
      vertices.push(
        rotate([
          RADIUS * Math.sin(phi) * Math.cos(theta),
          -RADIUS * Math.cos(phi),
          RADIUS * Math.sin(phi) * Math.sin(theta),
        ]),
      );
    }
  }
  const south = vertices.push(rotate([0, RADIUS, 0])) - 1;
  const at = (ring: number, seg: number) => 1 + (ring - 1) * SEGMENTS + (seg % SEGMENTS);

  const edges: [number, number][] = [];
  for (let ring = 1; ring <= RINGS; ring++) {
    for (let seg = 0; seg < SEGMENTS; seg++) {
      edges.push([at(ring, seg), at(ring, seg + 1)]);
      if (ring === 1) edges.push([0, at(ring, seg)]);
      if (ring === RINGS) {
        edges.push([at(ring, seg), south]);
      } else {
        edges.push([at(ring, seg), at(ring + 1, seg)]);
        edges.push([at(ring, seg), at(ring + 1, seg + 1)]);
      }
    }
  }

  const buckets = { front: "", side: "", back: "" };
  for (const [a, b] of edges) {
    const [ax, ay, az] = vertices[a];
    const [bx, by, bz] = vertices[b];
    const depth = (az + bz) / 2 / RADIUS;
    const key = depth > 0.3 ? "front" : depth > -0.3 ? "side" : "back";
    buckets[key] += `M${ax.toFixed(1)} ${ay.toFixed(1)}L${bx.toFixed(1)} ${by.toFixed(1)}`;
  }

  const nodes = vertices.filter(([, , z]) => z / RADIUS > 0.45);
  return { buckets, nodes };
}

const MESH = buildMesh();

export function MeshSphere({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-104 -104 208 208"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("text-accent-light", className)}
    >
      <g stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke">
        <path d={MESH.buckets.back} strokeOpacity={0.08} vectorEffect="non-scaling-stroke" />
        <path d={MESH.buckets.side} strokeOpacity={0.2} vectorEffect="non-scaling-stroke" />
        <path d={MESH.buckets.front} strokeOpacity={0.43} vectorEffect="non-scaling-stroke" />
      </g>
      <g fill="currentColor" fillOpacity={0.8}>
        {MESH.nodes.map(([x, y], index) => (
          <circle key={index} cx={x.toFixed(1)} cy={y.toFixed(1)} r={0.6} />
        ))}
      </g>
    </svg>
  );
}
