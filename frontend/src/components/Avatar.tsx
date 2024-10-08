export const Avatar = ({name , size}: {name: string, size: number }) => {
    return (
        <div className= { `relative inline-flex items-center justify-center ${ size === 10 ? "w-10 h-10" : "w-6 h-6" } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600` }>
            <span className="font-medium text-gray-600 dark:text-gray-300 ">{ name[0] }</span>
        </div>
    );
    
}