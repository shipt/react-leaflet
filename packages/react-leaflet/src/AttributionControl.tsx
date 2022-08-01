import { createControlComponent } from '@shipt/react-leaflet-core'
import { Control } from 'leaflet'

export type AttributionControlProps = Control.AttributionOptions

export const AttributionControl = createControlComponent<
  Control.Attribution,
  AttributionControlProps
>(function createAttributionControl(props) {
  return new Control.Attribution(props)
})
