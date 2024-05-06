import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div id="header">
                <span>[image]</span>
                <a>{"Donate".toUpperCase()}</a>
                <a>{"Give Food".toUpperCase()}</a>
                <a>{"Get Involved".toUpperCase()}</a>
            </div>
        </div>
    );
}
