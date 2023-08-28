import css_icon from '@assets/icons/technology/css-icon.png'
import react_icon from '@assets/icons/technology/react-icon.png'
import js_icon from '@assets/icons/technology/js-icon.png'
import html_icon from '@assets/icons/technology/html-icon.png'
import node_icon from '@assets/icons/technology/node-icon.png'
import sass_icon from '@assets/icons/technology/sass-icon.png'

import vscode_icon from '@assets/icons/tools/vscode-icon.png'
import git_icon from '@assets/icons/tools/git-icon.png'
import github_icon from '@assets/icons/tools/github-icon.png'

import next_icon from '@assets/icons/learning/next-icon.png'
import ts_icon from '@assets/icons/learning/ts-icon.png'
import redux_icon from '@assets/icons/learning/redux-icon.png'

import communication_icon from '@assets/icons/soft/communication-icon.png'
import creative_icon from '@assets/icons/soft/creative-icon.png'
import problem_icon from '@assets/icons/soft/problem-icon.png'
import selfdiscipline_icon from '@assets/icons/soft/selfdiscipline-icon.png'
import teamwork_icon from '@assets/icons/soft/teamwork-icon.png'
import fast_icon from '@assets/icons/soft/fast-icon.png'

import express_icon from '@assets/icons/workedwith/express-icon.png'
import mongo_icon from '@assets/icons/workedwith/mongo-icon.png'
import python_icon from '@assets/icons/workedwith/python-icon.png'
import tailwind_icon from '@assets/icons/workedwith/tailwind-icon.png'
import api_icon from '@assets/icons/workedwith/api-icon.png'
import postman_icon from '@assets/icons/workedwith/postman-icon.png'

import '@styles/skills.sass'

import Image from 'next/image'
export const techArray = [css_icon, react_icon,js_icon,html_icon, sass_icon]
export const toolsArray = [vscode_icon,git_icon,github_icon]
export const learningArray = [next_icon,ts_icon,redux_icon]
//export const softArray = [communication_icon,creative_icon,problem_icon,selfdiscipline_icon,teamwork_icon]
export const softArray = [
    {
        icon: teamwork_icon,
        text: 'Teamwork'
    },
    {
        icon: communication_icon,
        text: 'Communication'
    },
    {
        icon: selfdiscipline_icon,
        text: 'Self-discipline'
    },
    {
        icon: problem_icon,
        text: 'Problem-solving'
    },
    {
        icon: fast_icon,
        text: 'Fast-learning'
    },
    {
        icon: creative_icon,
        text: 'Creative'
    },
]
export const workedwithArray = [express_icon,mongo_icon,python_icon,tailwind_icon, node_icon, api_icon, postman_icon]

export const CustomIcon = ({src, className, ref, delay}) => {
    return <Image src={src} width={50} height={50} className={className} ref={ref} style={{
        animationDelay: delay
      }}
        
      />
}
//SOFT SKILLS
export const CommunicationIcon = ({className, ref}) => {
    return <Image src={communication_icon} width={50} height={50} className={className} ref={ref} style={{
        animationDelay: '1s'
      }}
        
      />
}
export const CreativeIcon = ({className, ref}) => {
    return <Image src={creative_icon} width={50} height={50} className={className} ref={ref} style={{
        animationDelay: '2.5s'
      }}/>
}
export const ProblemIcon = ({className, ref}) => {
    return <Image src={problem_icon} width={50} height={50} className={className} ref={ref} style={{
        animationDelay: '2s'
      }}/>
}
export const SelfdisciplineIcon = ({className, ref}) => {
    return <Image src={selfdiscipline_icon} width={50} height={50} className={className} ref={ref} style={{
        animationDelay: '1.5s'
      }}/>
}
export const TeamworkIcon = ({className, ref}) => {
    return <Image src={teamwork_icon} width={50} height={50} className={className} ref={ref} style={{
        animationDelay: '0.5s'
      }}/>
}
export const FastIcon = ({className, ref}) => {
    return <Image src={fast_icon} width={50} height={50} className={className} ref={ref} style={{
        animationDelay: '0.5s'
      }}/>
}

//TECHNOLOGIES
export const CssIcon = ({className, ref}) => {
    return <Image src={css_icon} width={50} height={50} className={className} ref={ref} style={{
        animationDelay: '0.5s'
      }}
        
      />
}
export const ReactIcon = ({className, ref}) => {
    return <Image src={react_icon} width={50} height={50} className={className} ref={ref} style={{
        animationDelay: '1s'
      }}/>
}
export const JsIcon = ({className, ref}) => {
    return <Image src={js_icon} width={50} height={50} className={className} ref={ref}style={{
        animationDelay: '1.5s'
      }}/>
}
export const HtmlIcon = ({className, ref}) => {
    return <Image src={html_icon} width={50} height={50} className={className} ref={ref}style={{
            animationDelay: '2s'
      }}/>
}
export const NodeIcon = ({className, ref}) => {
    return <Image src={node_icon} width={50} height={50} className={className} ref={ref}style={{
        animationDelay: '2.5s'
      }}/>
}
export const SassIcon = ({className, ref}) => {
    return <Image src={sass_icon} width={50} height={50} className={className} ref={ref}style={{
        animationDelay: '3s'
      }}/>
}

//TOOLS
export const VscodeIcon = ({className, ref}) => {
    return <Image src={vscode_icon} width={50} height={50} className={className} ref={ref}style={{
        animationDelay: '0.5s'
      }}/>
}
export const GitIcon = ({className, ref}) => {
    return <Image src={git_icon} width={50} height={50} className={className} ref={ref}style={{
        animationDelay: '1s'
      }}/>
}
export const GithubIcon = ({className, ref, animationDelay}) => {
    return <Image src={github_icon} width={50} height={50} className={className} ref={ref}style={{
        animationDelay: animationDelay  
      }}/>
}

//LEARNING
export const NextIcon = ({className, ref}) => {
    return <Image src={next_icon} width={50} height={50} className={className} ref={ref}style={{
        animationDelay: '0.5s'
      }}/>
}
export const TsIcon = ({className, ref}) => {
    return <Image src={ts_icon} width={50} height={50} className={className} ref={ref}style={{
        animationDelay: '1s'
      }}/>
}
export const ReduxIcon = ({className, ref}) => {
    return <Image src={redux_icon} width={50} height={50} className={className} ref={ref}style={{
        animationDelay: '1.5s'
      }}/>
}