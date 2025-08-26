interface Project {
  title: string
  description: string
  link: string
  techs: string[]
  image: string
}

interface LogoProps {
  fill?: string
  height?: number
  width?: number
}

export type { Project, LogoProps }