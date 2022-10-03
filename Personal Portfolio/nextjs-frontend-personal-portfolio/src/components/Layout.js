import { Intro } from "./Intro"

export default function Layout({ children }) {
  return (
    <>
    <Intro />
    {children}
    </>
  )
}