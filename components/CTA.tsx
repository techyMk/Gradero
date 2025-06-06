import Image from "next/image"
import Link from "next/link"

const CTA = () => {
  return (
    <section className="cta-section">
        <div className="cta-badge">Discover Learning That Fits You</div>
        <h2 className="text-3xl font-bold">
            Your Learning, Your Companion!
        </h2>
        <p>Customize your voice tutor: Name, subject, voice and personality — then start natural, engaging learning conversations.</p>
        <Image src="images/cta.svg" alt="cta" width={362} height={232}/>
        <button className="btn-primary">
            <Image src="icons/plus.svg" alt="plus" width={12} height={12}/>
            <Link href="/companions/new">
                <p>Create Your Smart Companion</p>
            </Link>
        </button>
    </section>
  )
}

export default CTA