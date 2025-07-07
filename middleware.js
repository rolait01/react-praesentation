// middleware.js im Root
export function middleware(req) {
    const basicAuth = req.headers.get("authorization");

    const USER = "Rob";
    const PASS = "sdfbwerhbwFBhebf1345262";

    if (basicAuth) {
        const [scheme, encoded] = basicAuth.split(" ");
        if (scheme === "Basic") {
            const [user, pass] = atob(encoded).split(":");
            if (user === USER && pass === PASS) {
                return;
            }
        }
    }

    return new Response("Zugriff verweigert", {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="Protected Area"',
        },
    });
}
