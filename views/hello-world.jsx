import React from 'react';

export default function HelloWorld() {
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
      <p>Hello</p>
      <p>requestId {requestId}</p>
      <p>requestTypeId {requestTypeId}</p>
      <p>serviceDeskId {serviceDeskId}</p>
      <p>user {user}</p>
    </>
  );
}
