import { createPathComponent, updateCircle } from '@shipt/react-leaflet-core'
import type { CircleMarkerProps } from '@shipt/react-leaflet-core'
import { CircleMarker as LeafletCircleMarker } from 'leaflet'

export type { CircleMarkerProps } from '@shipt/react-leaflet-core'

export const CircleMarker = createPathComponent<
  LeafletCircleMarker,
  CircleMarkerProps
>(function createCircleMarker({ center, children: _c, ...options }, ctx) {
  const instance = new LeafletCircleMarker(center, options)
  return { instance, context: { ...ctx, overlayContainer: instance } }
}, updateCircle)
