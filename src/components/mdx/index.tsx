import Cmd from './Cmd';
import Code from './Code';
import Repo from './Repo';

export default {
	Repo: (props: any) => <Repo {...props} />,
	Code: (props: any) => <Code {...props} />,
	Cmd: (props: any) => <Cmd {...props} />,
};
