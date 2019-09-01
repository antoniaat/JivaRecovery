import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

import "./VehicleServices.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import autoReparingIcon from "../../../assets/icons/icon-repair.png";
import transmissionChekupIcon from "../../../assets/icons/icon-tabs02.png";
import vehicleInspectionIcon from "../../../assets/icons/icon-tabs03.png";

function Services() {
  const faCheckCircleIcon = <FontAwesomeIcon icon={faCheckCircle} />;

  return (
    <div className="VehicleServices">
      <section>
        <h2>Vehicle Services</h2>
        <span>-</span>
        <p>BEST FOR YOUR CAR</p>
      </section>

      <section>
        <article>
          <Tabs
            vertical="true"
            defaultTab="autoReparing"
            onChange={tabId => {
              console.log(tabId);
            }}
          >
            <TabList>
              <Tab tabFor="autoReparing">
                <img src={autoReparingIcon}></img>
                <p>Auto Repairing</p>
              </Tab>
              <Tab tabFor="transmissionChekup">
                <img src={transmissionChekupIcon}></img>
                <p>Transmission Checkup</p>
              </Tab>
              <Tab tabFor="vehicleInspection">
                <img src={vehicleInspectionIcon}></img>
                <p>Vehicle Inspection</p>
              </Tab>
            </TabList>

            <TabPanel tabId="autoReparing">
              <article className="tab-left-article">
                <h4>Auto Repairing</h4>
                <p>
                  Histrionically one along far coast amenable scandalously
                  arrogant a crucially since far hence pounded flexed because
                  unjustifiably bluebird winced far spon etaneous oirksome
                  spelled one yikes this thus hence this against above. Against
                  abortively darn took yikes black returned bet in the slight
                  shook far extrins burra like ponderously inescapably closed
                  sudden unsafely hey superbly much.
                </p>
              </article>

              <article className="tab-right-article">
                <ul>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Dardinal raccoon along assisted</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Superbly much the sheared however</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Terrier lorikeet manta exuberant</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Took yikes black returned slight</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Far extrins burra like ponderously</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Estrean ante lectus, venenatis at</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Iescapably closed sudden unsafely</p>
                  </li>
                </ul>
              </article>
            </TabPanel>
            <TabPanel tabId="transmissionChekup">
              <article className="tab-left-article">
                <h4>Transmission Checkup</h4>
                <p>
                  Against abortively darn took yikes black returned bet in the
                  slight shook far extrins burra like ponderously inescapably
                  closed sudden unsafely hey superbly much. Histrionically one
                  along far coast amenable scandalously arrogant a crucially
                  since far hence pounded flexed because unjustifiably bluebird
                  winced far spon etaneous oirksome spelled one yikes this thus
                  hence this against above.
                </p>
              </article>

              <article className="tab-right-article">
                <ul>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Took yikes black returned slight</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Far extrins burra like ponderously</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Estrean ante lectus, venenatis at</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Iescapably closed sudden unsafely</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Dardinal raccoon along assisted</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Superbly much the sheared however</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Terrier lorikeet manta exuberant</p>
                  </li>
                </ul>
              </article>
            </TabPanel>
            <TabPanel tabId="vehicleInspection">
              <article className="tab-left-article">
                <h4>Vehicle Inspection</h4>
                <p>
                  Darn took yikes black returned bet in the slight shook far
                  extrins burra like ponderously inescapably closed sudden
                  unsafely hey superbly much.Histrionically one along far coast
                  amenable scandalously arrogant a crucially since far hence
                  against above.
                </p>
              </article>

              <article className="tab-right-article">
                <ul>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Iescapably closed sudden unsafely</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Dardinal raccoon along assisted</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Took yikes black returned slight</p>
                  </li>
                  <li>
                    <span>{faCheckCircleIcon}</span>
                    <p>Far extrins burra like ponderously</p>
                  </li>
                </ul>
              </article>
            </TabPanel>
          </Tabs>
        </article>

        <article></article>
      </section>
    </div>
  );
}

export default Services;
