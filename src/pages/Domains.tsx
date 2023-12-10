import React from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Button,
  Icon,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import PCard from "../components/PCard";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

type Props = {};
const domains: Array<String> = ["Python", "Java", "Net", "Rust", "Cloud"];

const projects = [
  {
    title: "OAuth2 authentication",
    githubLink: "https://github.com/sahil-shubham/OAuth2-authentication",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "OAuth2 authentication w/ PKCE",
  },
  {
    title: "Ecommerce Microservices",
    githubLink: "https://github.com/sahil-shubham/OAuth2-authentication",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Ecommerce Microservices in java",
  },
];
interface LinkItemProps {
  name: string;
}
function Domains({}: Props) {
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar />
      <Container py={12}>
        <Tabs variant="soft-rounded" colorScheme="teal" size={"lg"} py={8}>
          <Button
            variant={"ghost"}
            leftIcon={<Icon as={CiCirclePlus} />}
            py={8}
            onClick={() => {
              navigate("/project");
            }}
          >
            Add your project
          </Button>
          <TabList>
            {domains.map((domain) => {
              return <Tab>{domain}</Tab>;
            })}
          </TabList>
          <TabPanels>
            {domains.map((domain) => {
              return projects.map((i) => (
                <TabPanel py={12} key={i.title}>
                  <PCard
                    domain={String(domain)}
                    // title={String(i.title)}
                    // description={String(i.description)}
                    // glink={String(i.githubLink)}
                    // ylink={String(i.youtubeLink)}
                  />{" "}
                </TabPanel>
              ));
            })}
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
}

export default Domains;
