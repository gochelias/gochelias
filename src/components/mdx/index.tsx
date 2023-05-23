import Cmd from './Cmd';
import Code from './Code';

export default {
	Code: (props: any) => <Code {...props} />,
	Cmd: (props: any) => <Cmd {...props} />,
};
