import React, { useState, useContext, useCallback } from "react";
import { Text, Flex, Heading } from "@metagg/mgg-uikit";
import styled, { ThemeContext } from "styled-components";
import Page from "components/layout/Page";

import { NavOption } from "../../style/Global";
import partners from "../../config/constants/partners";
import { NavOptionContainer } from "../../style/Global";
import {
  BgPage,
  PageTitle,
  Title,
  Logos,
  Logo,
  Card,
  CardContainer,
  List,
  CheckList,
} from "./styled";


const Partners = () => {
  const theme = useContext(ThemeContext);
  const [active, setActive] = useState(0);
  const [getPartners, setPartners] = useState(partners.Partners);

  return (
    <>
      <Page>
        <BgPage>
          <div style={{ position: "relative", zIndex: 2, paddingTop: 100, }}>
            <PageTitle size="xxl" color="#fdda00">
              Partners
            </PageTitle>
            <NavOptionContainer
              alignItems="center"
              margin="2.5rem 0px 2rem 0px"
              padding="0 0 1rem 0"
              maxScreen="650px"
            >
              <NavOption
                key="all"
                style={{ borderRadius: "0.5rem", padding: "0 2rem" }}
                onClick={() => {
                  setActive(0);
                }}
                activeIndex={active === 0}
              >
                All
              </NavOption>
              <NavOption
                key="all"
                style={{ borderRadius: "0.5rem", padding: "0 2rem" }}
                onClick={() => {
                  setActive(1);
                  setPartners(partners.InvsBckrs);
                }}
                activeIndex={active === 1}
              >
                Investors
              </NavOption>
              <NavOption
                key="all"
                style={{ borderRadius: "0.5rem", padding: "0 2rem" }}
                onClick={() => {
                  setActive(2);
                  setPartners(partners.Partners);
                }}
                activeIndex={active === 2}
              >
                Partners
              </NavOption>
            </NavOptionContainer>

            {active !== 0 ? (
              <Logos>
                {Object.keys(getPartners).map((partner) => (
                  <CardContainer>
                    <a href={getPartners[partner].link} target="_blank">
                      <Card>
                        <img src={getPartners[partner].logo} />
                      </Card>
                    </a>
                  </CardContainer>
                ))}
              </Logos>
            ) : (
              <div>
                <div style={{ margin: "0 0 2rem 0" }}>
                <Title size="xl" color="#fdda00">
                INVESTORS AND BACKERS
                </Title>
                  <Logos>
                    {Object.keys(partners.InvsBckrs).map((partner) => (
                      <CardContainer>
                        <a href={partners.InvsBckrs[partner].link} target='_blank'>
                        <Card>
                          <img src={partners.InvsBckrs[partner].logo} />
                        </Card>
                        </a>
                      </CardContainer>
                    ))}
                  </Logos>
                </div>
                <div style={{ margin: "0 0 2rem 0" }}>
                <Title size="xl" color="#fdda00">
                GAMING PARTNERS
                </Title>
                  <Logos>
                    {Object.keys(partners.Partners).map((partner) => (
                      <CardContainer>
                        <a href={partners.Partners[partner].link} target="_blank">
                        <Card>
                          <img src={partners.Partners[partner].logo} />
                        </Card>
                        </a>
                      </CardContainer>
                    ))}
                  </Logos>
                </div>
              </div>
            )}
          </div>
        </BgPage>
      </Page>
    </>
  );
};

export default Partners;
