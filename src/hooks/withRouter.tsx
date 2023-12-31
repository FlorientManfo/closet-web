import { useParams } from 'react-router-dom';

const withRouter = (WrappedComponent: any)=> (props: any) => {
  const params = useParams();
  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};

export default withRouter;