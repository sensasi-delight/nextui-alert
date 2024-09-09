import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: './dist/index.mjs',
                format: 'es',
                plugins: [terser()],
            },
        ],
        external: [
            '@nextui-org/button',
            '@nextui-org/card',
            'lucide-react',
            'react/jsx-runtime',
        ],
        plugins: [
            typescript({
                project: './tsconfig.json',
                exclude: ['eslinst.config.mjs', 'rollup.config.mjs'],
            }),
        ],
    },
]

export default config
