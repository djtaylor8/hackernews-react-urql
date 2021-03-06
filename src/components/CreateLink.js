import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'urql';
import { useNavigate } from 'react-router';

const POST_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
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
`

const CreateLink = () => {
    const [description, setDescription] = React.useState('');
    const [url, setUrl] = React.useState('');
    const navigate = useNavigate();

    const [state, executeMutation] = useMutation(POST_MUTATION);

    const submit = React.useCallback(() => {
        executeMutation({ url, description }).then(() => {
            navigate('/')
        })
    }, [executeMutation, url, description, navigate])

    return (
        <div>
            <div className='flex flex-column mt3'>
                <input 
                    className='mb2'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    type='text'
                    placeholder='A description for the link'
                />
                <input 
                    className='mb2'
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    type='text'
                    placeholder='The URL for the link'
                />
            </div>
            <button onClick={submit} disabled={state.fetching}>
                Submit
            </button>
        </div>
    );
};

export default CreateLink;