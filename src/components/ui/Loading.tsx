import { Skeleton } from 'antd';

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Skeleton avatar paragraph={{ rows: 4 }} /></div>
    );
};

export default Loading;