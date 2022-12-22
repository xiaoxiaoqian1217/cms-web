import gql from 'graphql-tag';
export const globalQurey = gql`
query  {
	global {
    data{
      attributes{
        navigation{
          __typename
          leftButton {
            label
          }
          loginButton {
            label
          }
          ...on ComponentGlobalNavigation{
            logo {
              __typename
              ...on ComponentShareLogo{
                iconUrl {
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
            links {
              label
              href
              target
              isExternal
            }
          }
                    

        }
        footer{
          __typename
          ...on ComponentGlobalFooter{
            footerFields{
              __typename
              ...on ComponentShareField{
                label
                value
              }
            }
            companyInfo{
              des
              fullName
              qwQrcode{
                data{
                  attributes{
                    url
                  }
                }
              }
              iconUrl{
                data{
                  attributes{
                    url
                  }
                }
              }
         
            }
           
          }
        }
      }
    }
  }
}`