import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AiDecisionList } from "./aiDecision/AiDecisionList";
import { AiDecisionCreate } from "./aiDecision/AiDecisionCreate";
import { AiDecisionEdit } from "./aiDecision/AiDecisionEdit";
import { AiDecisionShow } from "./aiDecision/AiDecisionShow";
import { VoteList } from "./vote/VoteList";
import { VoteCreate } from "./vote/VoteCreate";
import { VoteEdit } from "./vote/VoteEdit";
import { VoteShow } from "./vote/VoteShow";
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
        title={"AI Decision and Voting Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AiDecision"
          list={AiDecisionList}
          edit={AiDecisionEdit}
          create={AiDecisionCreate}
          show={AiDecisionShow}
        />
        <Resource
          name="Vote"
          list={VoteList}
          edit={VoteEdit}
          create={VoteCreate}
          show={VoteShow}
        />
      </Admin>
    </div>
  );
};

export default App;
