import { useRouter } from "next/router";


export default function ProductPage() {
    const router = useRouter();
    console.log(router.query.slug);

    return (
        <>
            <div className="section bg-blue">
                <div className="container">
                    <div className="section-intro">
                        <h1>The Latest Products</h1>
                    </div>
                </div>
            </div>

            <div className="section small">
                <div className="container">
                    <ul className="product-card-grid"></ul>
                </div>
            </div>
            
            <h1>{router.query.slug}</h1>
        </>
    )
}
