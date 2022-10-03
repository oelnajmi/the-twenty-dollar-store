import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        firstName,
        lastName,
        userName,
        password,
        email,
      };

      const JSONdata = JSON.stringify(data);
      const endpoint = '/api/users';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      };
      const response = await fetch(endpoint, options);
      const result = await response.json();
      if (result.error) {
        setError(result.error);
      } else {
        router.push('http://localhost:3000/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen justify-around flex flex-col max-w-[1500px] mx-auto p-4">
      <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
        <div className="p-10 border border-black">
          <div className="pb-4 text-center text-3xl font-extrabold whitespace-nowrap primary-text-color">
            <span className="font-burtons text-center text-3xl sm:text-3xl text-accent-content font-extrabold whitespace-nowrap primary-text-color">
              <span className="hidden lg:block">THE TWENTY DOLLAR STORE</span>{' '}
              <span className="lg:hidden">THE $20 STORE</span>
            </span>
          </div>
          <div className="pb-4 text-center text-3xl font-extrabold whitespace-nowrap primary-text-color">
            <Image
              className="items-center mx-auto"
              src="/undraw_going_up_re_86kg.svg"
              alt="Vercel Logo"
              width={100}
              height={100}
            />
          </div>

          <div className="mb-10 font-burtons text-center text-3xl font-extrabold whitespace-nowrap">
            Sign up
          </div>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-6 text-center form-control register-input bg-red-400">
                <h2>{error}</h2>
              </div>
            )}
            <div className="mb-6">
              <input
                type="text"
                className="form-control register-input border-black"
                placeholder="Username"
                minLength="6"
                maxLength="20"
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                className="form-control register-input border-black"
                placeholder="Email address"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                className="form-control register-input border-black"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn glass text-black w-full bg-slate-200 hover:cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Sign up
            </button>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>
          </form>
          <div className="space-y-4 text-sm font-semibold text-slate-800 text-center hover:text-blue-500">
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
            <Link href="/SignIn">
              <div className="items-center bg-white text-black rounded-md p-3 border border-black hover:cursor-pointer">
                <div>Sign in with email</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
