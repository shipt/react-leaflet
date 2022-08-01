import {
  CircleMarkerProps,
  createPathComponent,
  updateCircle,
} from '@shipt/react-leaflet-core'
import { Circle as LeafletCircle } from 'leaflet'

export type CircleProps = CircleMarkerProps

export const Circle = createPathComponent<LeafletCircle, CircleProps>(
  function createCircle({ center, children: _c, ...options }, ctx) {
    const instance = new LeafletCircle(center, options)
    return { instance, context: { ...ctx, overlayContainer: instance } }
  },
  updateCircle,
)
