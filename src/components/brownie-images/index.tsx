export { OGChunkImage } from './OGChunk';
export { PBAnomalyImage } from './PBAnomaly';
export { BrookieFusionImage } from './BrookieFusion';
export { FruityRiftImage } from './FruityRift';

import { OGChunkImage } from './OGChunk';
import { PBAnomalyImage } from './PBAnomaly';
import { BrookieFusionImage } from './BrookieFusion';
import { FruityRiftImage } from './FruityRift';

export const brownieImageMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'og-chunk': OGChunkImage,
  'pb-anomaly': PBAnomalyImage,
  'brookie-fusion': BrookieFusionImage,
  'fruity-rift': FruityRiftImage,
};

export function getBrownieImage(flavorId: string): React.ComponentType<{ className?: string }> | null {
  return brownieImageMap[flavorId] ?? null;
}
