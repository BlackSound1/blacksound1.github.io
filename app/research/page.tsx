import posthog from "posthog-js";

export default function Research() {
    posthog.capture('$pageview', { page: 'research' });
    return (
        <div className="">
            Hey
        </div>
    );
}
