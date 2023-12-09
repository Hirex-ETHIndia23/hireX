import React from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Button,
  Icon
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import PCard from "../components/PCard";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


type Props = {};
const domains: Array<String> = [
"Python", "Java", "Net", "Rust","Cloud"

];


interface LinkItemProps {
  name: string;
}
function Domains({}: Props) {
const navigate = useNavigate();

  return (
    <div>
      <Sidebar/>
      <Container py={12}>
        <Tabs variant="soft-rounded" colorScheme="teal" size={'lg'} py={8}>
        <Button variant={'ghost'} leftIcon={<Icon as={CiCirclePlus} />} py={8} onClick={()=>{
          navigate('/project')
        }}>
          Add your project
        </Button>
          <TabList>
            {
              domains.map((domain) => {
                return <Tab>{domain}</Tab>
              })
            }
          </TabList>
          <TabPanels>
          {
              domains.map((domain) => {
                return <TabPanel py={12}>
                  <PCard domain={String(domain)}/>
                  </TabPanel>
              })
          } 
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
}

export default Domains;
