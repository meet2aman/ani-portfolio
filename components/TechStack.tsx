import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechStack = () => {
  return (
    <div className="flex max-lg:flex-col justify-start items-center h-[30rem]">
      <div className=" lg:h-[30rem] gap-2 max-lg:flex max-lg:flex-col max-lg:mb-7">
        <h1 className="font-extrabold text-6xl lg:text-7xl lg:-rotate-90 lg:mt-52 lg:-ml-32 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500">
          TechStack
        </h1>
        <p className="lg:-rotate-90 text-center lg:-mt-8">
          Techonologies and Skills
        </p>
      </div>
      <div className=" h-full w-full flex justify-center items-center">
        <Tabs defaultValue="all" className=" w-full h-full">
          <TabsList className="justify-center">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="devops">Devops</TabsTrigger>
            <TabsTrigger value="others">Others</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="backend">Change your password here.</TabsContent>
          <TabsContent value="devops">Change your password here.</TabsContent>
          <TabsContent value="others">Change your password here.</TabsContent>
          <TabsContent value="all">All skills are here </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TechStack;
