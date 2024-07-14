import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HotWalletList } from "./hotWallet/HotWalletList";
import { HotWalletCreate } from "./hotWallet/HotWalletCreate";
import { HotWalletEdit } from "./hotWallet/HotWalletEdit";
import { HotWalletShow } from "./hotWallet/HotWalletShow";
import { TokenList } from "./token/TokenList";
import { TokenCreate } from "./token/TokenCreate";
import { TokenEdit } from "./token/TokenEdit";
import { TokenShow } from "./token/TokenShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Hot Wallet Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="HotWallet"
          list={HotWalletList}
          edit={HotWalletEdit}
          create={HotWalletCreate}
          show={HotWalletShow}
        />
        <Resource
          name="Token"
          list={TokenList}
          edit={TokenEdit}
          create={TokenCreate}
          show={TokenShow}
        />
      </Admin>
    </div>
  );
};

export default App;
