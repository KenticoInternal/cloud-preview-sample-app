import {matchPath} from "react-router";
import {ProjectRoute, ProjectRouteParams} from "../constants/routePaths";

export const getProjectIdFromUrl = (): string | null => {
  console.log(`get project id from url (${window.location})`);
  if (window.location) {
    const projectName = process.env.REACT_APP_PROJECT_ROUTE;
    const routeToMatch = "/" + projectName + ProjectRoute + "*";
    const match = matchPath<ProjectRouteParams>(window.location.pathname, routeToMatch);
    if (match) {
      console.log('got projectId from url: ', match.params.projectId);
      return match.params.projectId;
    } else {
      console.log('no projectId in url');
    }
  }

  return null;
};
