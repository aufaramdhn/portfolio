import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GITHUB_ACCOUNT,
  GITHUB_API_BASE_URL,
  GITHUB_USER_QUERY,
} from "../constants/Github";

export const GithubContribution = () => {
  const [data, setData] = useState();

  async function getGithubData() {
    const response = await axios.post(
      GITHUB_API_BASE_URL,
      {
        query: GITHUB_USER_QUERY,
        variables: {
          username: GITHUB_ACCOUNT.username,
        },
      },
      {
        headers: {
          Authorization: `bearer ${GITHUB_ACCOUNT.token}`,
        },
      }
    );
    setData(
      response.data?.data.user.contributionsCollection.contributionCalendar
    );
  }

  useEffect(() => {
    getGithubData();
  }, []);
  return <div>GithubContribution</div>;
};
