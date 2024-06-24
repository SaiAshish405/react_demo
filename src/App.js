import HeadingOne from "./components/Headings/Headings"
import { HeadingTwo } from "./components/Headings/Headings"
import { Heading3 } from "./components/Headings/Headings"
import { Heading4 } from "./components/Headings/Headings"
import { Heading5 } from "./components/Headings/Headings"
import { Heading6 } from "./components/Headings/Headings"
import { Button1 } from "./components/button/Button"
import { Button2 } from "./components/button/Button"
import { Image } from "./components/image/Image"
import { Card } from "./components/card/Card"
import { Table } from "./components/table/Table"
const App=()=>{
  return(
    <>
    <HeadingOne/>
    <HeadingTwo/>
    <Heading3/>
    <Heading4/>
    <Heading5/>
    <Heading6/>
    <Button1/>
    <Button2/>
    <Button2/>
    <Button2/>
    <Image/>
    <h2>Card will display below</h2>
    <Card/>
    <Table/>


    </>
  )
}
export default App