import gql from 'graphql-tag';
export const globalQurey = gql`
query  {
	global {
    data{
      attributes{
            icpNumber

        siteHeader{
          __typename
          leftButton {
            label
          }
          loginButton {
            label
            image{
              data{
                attributes{
                  url
                
                
                }
              }
            }
          }
           ...on ComponentGlobalNavigation{
            logo {
              __typename
              ...on ComponentShareLogo{
                siteTitle
                iconUrl {
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
            navigations{
              data{
                id
                
                attributes{
                  label
                  href
                  isExternal
                  target
                  children {
                    data{
                      attributes{
                        label
                        href
                      }
                    }
                  }
                 
                }
              }
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