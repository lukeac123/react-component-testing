import { useState, useEffect, useMemo, use, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./DataTable.css";

type Address = {
  address: string;
};

type Company = {
  department: string;
  name: string;
  title: string;
  address: Address;
};

type User = {
  firstName: string;
  lastName: string;
  email: string;
  weight: number;
  company: Company;
};

function cleanData(data: User[]) {
  return data.map((user) => {
    return {
      ...user,
      ["company"]: {
        ...user.company,
        ["address"]: user.company.address.address,
      },
    };
  });
}

export const App = () => {
  const userFetchPromise = fetch("https://dummyjson.com/user").then(
    (response) => {
      if (!response.ok) throw new Error(`${response.status}`);
      return response.json();
    }
  );

  return (
    <div>
      {/* Hello World */}
      <ErrorBoundary fallback={<>Error</>}>
        <Suspense fallback={<>...loading</>}>
          <Table dataFetchPromise={userFetchPromise} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

function Table({ dataFetchPromise }: { dataFetchPromise }) {
  const data: any = use(dataFetchPromise);
  const users = cleanData(data.users);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Weight</th>
            <th scope="col">Company</th>
          </tr>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.email}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.weight}</td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <th scope="col">Department</th>
                          <th scope="col">Name</th>
                          <th scope="col">Title</th>
                          <th scope="col">Address</th>
                        </tr>
                        <tr>
                          {Object.values(user.company).map((companyData, i) => {
                            return (
                              <td key={user.company.address + i}>
                                {companyData}
                              </td>
                            );
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
