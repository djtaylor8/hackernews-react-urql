import React from 'react';
import { useQuery } from 'urql';
import { useLocation, useParams } from 'react-router-dom';
import gql from 'graphql-tag';
import Link from './Link';

export const FEED_QUERY = gql `
query FeedQuery($first: Int, $skip: Int, $orderBy: LinkOrderByInput) {
    feed(first: $first, skip: $skip, orderBy: $orderBy) {
      count
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
    let location = useLocation();
    let id = useParams();
    const isNewPage = location.pathname.includes('new')
    const page = parseInt(id.page, 10)
    const pageIndex = isNewPage ? (page - 1) * 10 : 0

    const variables = React.useMemo(() => ({
        skip: isNewPage ? (page - 1) * 10 : 0,
        first: isNewPage ? 10 : 100,
        orderBy: isNewPage ? 'createdAt_DESC' : null
    }), [isNewPage, page])

   const [result] = useQuery({ query: FEED_QUERY, variables });
   const { data, fetching, error } = result;

   if (fetching) return <div>Fetching</div>
   if (error) return <div>Error</div>

   const linksToRender = data.feed.links;

    return (
        <div>
           {linksToRender.map((link, index) => (<Link key={link.id} index={index + pageIndex} link={link} /> ))} 
        </div>
    );
};

export default LinkList;