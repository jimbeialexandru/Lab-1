import {Layout} from "antd";
import React from "react";
import Student from "../interface/secondInterface"
import StudentContent from "./Content"

const { Content } = Layout;
export interface StudentProps{
    students: Student[];
}

export const StudenOverview = ({students}:StudentProps) => {
        return(
            <Layout>
              <Content style={{ padding: '0 50px' }}>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                 <StudentContent students= {students}/>
                </Layout>
              </Content>
            </Layout>
        )
}