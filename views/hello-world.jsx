/* eslint-disable no-undef */
import React, { useRef, useState } from 'react';

export default function HelloWorld() {
  const [die, setDie] = useState();
  const [error, setError] = useState(false);
  const dieRef = useRef(); // RequestProperties won't work with useEffect and such
  const serviceDesk = AP.jiraServiceDesk;
  const requestProperties = serviceDesk ? new serviceDesk.RequestProperties() : undefined;
  if (requestProperties) {
    AP.events.on("jira-servicedesk-request-properties-serialize", function () {
      if (requestProperties) requestProperties.serialize({
        kantar_example_location_issue_property: dieRef.current,
        'attribute_product-attribute': dieRef.current,
        'true_hierarchy.market_scope': dieRef.current,
      });
    });

    AP.events.on("jira-servicedesk-request-properties-validate", function () {
      let valid = true;

      if (dieRef.current === "4" || dieRef.current === undefined) {
        setError(true);
        valid = false;
      }

      if (requestProperties) requestProperties.validate(valid);
    });
  }

  const queryParameters = new URLSearchParams(window.location.search);

  const requestId = queryParameters.get("requestId");
  const requestTypeId = queryParameters.get("requestTypeId");
  const serviceDeskId = queryParameters.get("serviceDeskId");
  const user = queryParameters.get("user");
  console.log('window.location', window.location);
  console.log('requestTypeId', requestTypeId);
  console.log('user', user);

  return (
    <>
      <p>Values injected via module in atlassian-connect.json:</p>
      <p>requestId {requestId} {`(Not here as it is only visible in 'Request details view')`}</p>
      <p>requestTypeId {requestTypeId}</p>
      <p>serviceDeskId {serviceDeskId}</p>
      <p>user {user} {`(injected manually by me)`}</p>
      <br />

      <select
        value={die}
        onChange={(e) => {
          dieRef.current = e.target.value;
          setDie(e.target.value);
        }}
        style={{ padding: "6px" }}
      >
        <option value="4">d4</option>
        <option value="6">d6</option>
        <option value="8">d8</option>
        <option value="10">d10</option>
        <option value="12">d12</option>
        <option value="20">d20</option>
      </select> {(error || die === undefined) && (<p className='field-error'>die can&apos;t be 4</p>)}
      <p>die {die}</p>
    </>
  );
}
