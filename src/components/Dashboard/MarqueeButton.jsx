import { RiJavascriptLine } from "react-icons/ri";

const MarqueeButton = () => {
    return (
        <div>
            <button className="flex items-center gap-2 p-3 rounded-full bg-blue-50">
                <RiJavascriptLine className="w-8 h-8 bg-blue-500 rounded-full" />
                Javascript
            </button>
        </div>
    );
};

export default MarqueeButton;