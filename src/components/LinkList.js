import React from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';
import Link from './Link';

const FEED_QUERY = gql `
    {
        feed {
            links {
                id
                createdAt
                url
                description
                postedBy {
                    id
                    name
                }
                votes {
                    id
                    user {
                        id
                    }
                }
            }
        }
    }
`
  

const LinkList = () => {
   const [result] = useQuery({ query: FEED_QUERY });
   const { data, fetching, error } = result;

   if (fetching) return <div>Fetching</div>
   if (error) return <div>Error</div>

   const linksToRender = data.feed.links;

    return (
        <div>
           {linksToRender.map((link, index) => <Link key={link.id} index={index} link={link} />)} 
        </div>
    );
};

export default LinkList;