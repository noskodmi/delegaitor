import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SurveyList } from "./survey/SurveyList";
import { SurveyCreate } from "./survey/SurveyCreate";
import { SurveyEdit } from "./survey/SurveyEdit";
import { SurveyShow } from "./survey/SurveyShow";
import { ResponseList } from "./response/ResponseList";
import { ResponseCreate } from "./response/ResponseCreate";
import { ResponseEdit } from "./response/ResponseEdit";
import { ResponseShow } from "./response/ResponseShow";
import { QuestionList } from "./question/QuestionList";
import { QuestionCreate } from "./question/QuestionCreate";
import { QuestionEdit } from "./question/QuestionEdit";
import { QuestionShow } from "./question/QuestionShow";
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
        title={"Survey Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Survey"
          list={SurveyList}
          edit={SurveyEdit}
          create={SurveyCreate}
          show={SurveyShow}
        />
        <Resource
          name="Response"
          list={ResponseList}
          edit={ResponseEdit}
          create={ResponseCreate}
          show={ResponseShow}
        />
        <Resource
          name="Question"
          list={QuestionList}
          edit={QuestionEdit}
          create={QuestionCreate}
          show={QuestionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
