import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { FoodMenuList } from "./foodMenu/FoodMenuList";
import { FoodMenuCreate } from "./foodMenu/FoodMenuCreate";
import { FoodMenuEdit } from "./foodMenu/FoodMenuEdit";
import { FoodMenuShow } from "./foodMenu/FoodMenuShow";
import { OrdersList } from "./orders/OrdersList";
import { OrdersCreate } from "./orders/OrdersCreate";
import { OrdersEdit } from "./orders/OrdersEdit";
import { OrdersShow } from "./orders/OrdersShow";
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
        title={"poc_1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="FoodMenu"
          list={FoodMenuList}
          edit={FoodMenuEdit}
          create={FoodMenuCreate}
          show={FoodMenuShow}
        />
        <Resource
          name="Orders"
          list={OrdersList}
          edit={OrdersEdit}
          create={OrdersCreate}
          show={OrdersShow}
        />
      </Admin>
    </div>
  );
};

export default App;
