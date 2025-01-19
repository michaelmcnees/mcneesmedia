export interface ContactFormData {
  name: string
  businessName?: string
  email: string
  phone: string
  message: string
}

export interface ActionResponse {
  success: boolean
  message: string
  values?: ContactFormData
  errors?: {
    [K in keyof ContactFormData]?: string[]
  }
}
