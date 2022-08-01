import { PathProps, createPathComponent } from '@shipt/react-leaflet-core'
import {
  LatLngExpression,
  PolylineOptions,
  Polygon as LeafletPolygon,
} from 'leaflet'
import { ReactNode } from 'react'

export interface PolygonProps extends PolylineOptions, PathProps {
  children?: ReactNode
  positions: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][]
}

export const Polygon = createPathComponent<LeafletPolygon, PolygonProps>(
  function createPolygon({ positions, ...options }, ctx) {
    const instance = new LeafletPolygon(positions, options)
    return { instance, context: { ...ctx, overlayContainer: instance } }
  },
  function updatePolygon(layer, props, prevProps) {
    if (props.positions !== prevProps.positions) {
      layer.setLatLngs(props.positions)
    }
  },
)
