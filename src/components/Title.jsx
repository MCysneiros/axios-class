import FirstRequest from '../examples/1-first-request';
import Headers from '../examples/2-headers';
import PostRequest from '../examples/3-post-request';
import GlobalInstance from '../examples/4-global-instance';
import CustomInstance from '../examples/5-custom-instance';
import Interceptors from '../examples/6-interceptors';
const Title = () => {
	return (
		<div className='title'>
			<h1>
				<span>axios</span> tutorial
				<Interceptors />
			</h1>
		</div>
	);
};
export default Title;
