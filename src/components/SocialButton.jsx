import kakaoIcon from "../assets/images/kakao-icon.png";
export function SocialButton() {
  return (
    <div className="mt-16 grid space-y-4">
      <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
        <div className="relative flex items-center justify-center">
          <img
            src={kakaoIcon}
            className="absolute left-0 w-5"
            alt="google logo"
          />
          <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
            카카오 계정으로 회원가입
          </span>
        </div>
      </button>
    </div>
  );
}
