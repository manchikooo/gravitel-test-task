import {gql} from "@apollo/client";

export const LOGIN = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            username
            password
            token
        }
    }
`;

export const GET_DASHBOARD = gql`
    query GetDashboard {
         dashboard {
                scenarios {
                  active
                  inactive
                  completed
                 }
                lists {
                   active
                  inactive
                  completed
                 }
                dialogs {
                   active
                  inactive
                  completed
                 }
         }
    }
`