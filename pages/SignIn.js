import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const SignIn = () => {
  return (
    <main className="min-h-screen justify-around flex flex-col max-w-[1500px] mx-auto p-4">
      <section className="">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
            <div className="p-10 border border-black">
              <div className="pb-4 text-center text-3xl font-extrabold whitespace-nowrap">
                <span className="font-burtons text-center text-3xl sm:text-3xl text-accent-content font-extrabold whitespace-nowrap primary-text-color">
                  <span className="hidden lg:block">
                    THE TWENTY DOLLAR STORE
                  </span>{' '}
                  <span className="lg:hidden">THE $20 STORE</span>
                </span>
              </div>
              <div className="pb-4 text-center text-3xl font-extrabold whitespace-nowrap primary-text-color">
                <Image
                  className="items-center mx-auto"
                  src="/undraw_login.svg"
                  alt="Vercel Logo"
                  width={100}
                  height={100}
                />
              </div>

              <div className="mb-10 font-burtons text-center text-3xl font-extrabold whitespace-nowrap">
                Log in
              </div>
              <form>
                <Link href="/api/auth/signin">
                  <a
                    className="inline-block w-full "
                    onClick={(e) => {
                      e.preventDefault();
                      signIn('google', {
                        callbackUrl: 'http://localhost:3000/',
                      });
                    }}
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <div className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-lg p-1 w-full">
                      <div className="flex justify-center space-x-4 items-center bg-white text-black rounded-md p-2">
                        <div>
                          <Image
                            src="/icons8-google.svg"
                            alt="Vercel Logo"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div>Continue with Google</div>
                      </div>
                    </div>
                  </a>
                </Link>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control register-input border-black"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control register-input border-black"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn glass text-black w-full bg-slate-200"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
              </form>
              <div className="p-4 text-sm font-semibold text-slate-800 text-center">
                <Link href="/SignUp">
                  <a className="hover:text-blue-600">Create Account</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
