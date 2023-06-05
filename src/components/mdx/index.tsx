import Cmd from './Cmd';
import Code from './Code';
import Pkg from './Pkg';
import Quote from './Quote';
import Repo from './Repo';

export default {
	Pkg: (props: any) => <Pkg {...props} />,
	Quote: (props: any) => <Quote {...props} />,
	Repo: (props: any) => <Repo {...props} />,
	Code: (props: any) => <Code {...props} />,
	Cmd: (props: any) => <Cmd {...props} />,
};
