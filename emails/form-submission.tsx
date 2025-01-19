import type * as React from 'react'
import type { ContactFormData } from '@/types/contact'

import { Body, Container, Column, Head, Heading, Hr, Html, Preview, Row, Section, Text } from '@react-email/components'

interface EmailProps {
  data: ContactFormData
}

export function Email({ data }: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>You received a new form submission from mcneesmedia.com!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={track.container}>
            <Row>
              <Column>
                <Text style={global.paragraphWithBold}>McNees Media</Text>
                <Text style={track.number}>noreply@mcnees.me</Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={message}>
            <Heading style={global.heading}>You received a new form submission from mcneesmedia.com!</Heading>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={addressTitle}>Name</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>{data.name}</Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={addressTitle}>Business Name</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>{data.businessName}</Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={addressTitle}>Email Address</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>{data.email}</Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={addressTitle}>Phone Number</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>{data.phone}</Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={addressTitle}>Message</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>{data.message}</Text>
          </Section>
          <Hr style={{ ...global.hr, marginTop: '12px' }} />
          <Section style={paddingY}>
            <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
              © 2025 McNees Media. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default Email

const paddingX = {
  paddingLeft: '40px',
  paddingRight: '40px'
}

const paddingY = {
  paddingTop: '22px',
  paddingBottom: '22px'
}

const paragraph = {
  margin: '0',
  lineHeight: '2'
}

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY
  },
  paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
  heading: {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: '-1px'
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: '#747474',
    fontWeight: '500'
  },
  button: {
    border: '1px solid #929292',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '10px 0px',
    width: '220px',
    display: 'block',
    textAlign: 'center',
    fontWeight: 500,
    color: '#000'
  } as React.CSSProperties,
  hr: {
    borderColor: '#E5E5E5',
    margin: '0'
  }
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const container = {
  margin: '10px auto',
  width: '600px',
  border: '1px solid #E5E5E5'
}

const track = {
  container: {
    padding: '22px 40px',
    backgroundColor: '#F7F7F7'
  },
  number: {
    margin: '12px 0 0 0',
    fontWeight: 500,
    lineHeight: '1.4',
    color: '#6F6F6F'
  }
}

const message = {
  padding: '40px 74px',
  textAlign: 'center'
} as React.CSSProperties

const addressTitle = {
  ...paragraph,
  fontSize: '15px',
  fontWeight: 'bold'
}

const footer = {
  policy: {
    width: '166px',
    margin: 'auto'
  },
  text: {
    margin: '0',
    color: '#AFAFAF',
    fontSize: '13px',
    textAlign: 'center'
  } as React.CSSProperties
}
