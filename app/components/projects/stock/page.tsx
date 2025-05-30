'use client'
import Navbar from '@/app/components/Navbar'
import Section from '@/app/components/Section'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/app/components/Footer'

export default function ProjectTemplate() {
  return (
    <>
        <style jsx global>{`
            @font-face {
            font-family: "Akira Expanded";
            src: url("/fonts/Akira Expanded Demo.otf") format("opentype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
            }
        `}</style>

        <Navbar />
        
        <Section className="mb-24">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-16">
                <div className="space-y-6 my-auto">
                    <h1 className="text-4xl font-black uppercase leading-tight" style={{ fontFamily: "'Akira Expanded', sans-serif" }}>Stock<br /> Forecasting</h1>
                    <h2 className="text-xl text-theme" style={{ fontFamily: "'Akira Expanded', sans-serif" }}>Using machine learning models to predict stock prices and market trends</h2>
                    <p className="leading-relaxed text-lg">Our project explores advanced machine learning techniques for stock market prediction by analyzing historical financial data to forecast both price and trend movements. We compare the performance of various models—including traditional regressors and deep learning architectures—and ultimately develop an ensemble stacking model for enhanced predictive accuracy. Leveraging techniques such as feature engineering, time-series preprocessing, and hyperparameter tuning, we aim to build a robust system for automated investment decision-making. This work underscores the potential of AI in financial forecasting, offering insights that support smarter trading strategies and risk management in volatile markets.</p>

                    <Link 
                        href="https://www.kaggle.com/datasets/jacksoncrow/stock-market-dataset" 
                        target="_blank"
                        className="inline-block font-black uppercase text-xl bg-foreground text-background-secondary px-8 py-3 rounded-full"
                        style={{ fontFamily: "'Akira Expanded', sans-serif" }}
                    >
                        Dataset
                    </Link>
                </div>

                <Image width={512} height={512} alt="xray image" src="/projects/stock.png" className="w-full aspect-[4/3] object-cover rounded-2xl my-auto" />
            </div>
        </Section>

        <Section className="bg-background py-12 my-24">
            <div 
                className="flex justify-around gap-8 lg:flex-col text-theme text-3xl uppercase underline"
                style={{ fontFamily: "'Akira Expanded', sans-serif" }}
            >
                <a href="#report" className="cursor-pointer">Report</a>
                <a href="#results" className="cursor-pointer">Results</a>
                <a href="#discussion" className="cursor-pointer">Discussion</a>
            </div>
        </Section>

        <Section id="report" className="mt-24">
            <div className="max-w-screen-md mx-auto space-y-8 [&_*]:leading-relaxed [&_*]:text-lg">
                <h2 className="font-extrabold !text-4xl" style={{ fontFamily: "'Akira Expanded', sans-serif" }}>Report</h2>
                <p className="">Predicting stock market trends is a challenging task due to the market's volatility and complex patterns. Accurate forecasting of stock price movements can help investors make better decisions. Our project explores how deep learning models analyze historical stock data to predict future price trends.</p>
                
                <h3 className="!text-xl text-theme font-bold">Methodology Overview</h3>
                <p><strong>Dataset:</strong> We used historical daily stock prices for 500 companies over the past 10 years, including open, close, high, low, and volume data. The dataset was split into training, validation, and test sets.</p>
                <p><strong>Preprocessing:</strong> Data was normalized to handle different stock price scales. Technical indicators like moving averages and RSI (Relative Strength Index) were computed to enrich input features. Sliding windows created time-series sequences.</p>
                <div>
                    <span><strong>Model Architecture:</strong> Four main deep learning models were tested:</span>
                    <ul className="list-disc [&>*]:ml-6">
                        <li><strong>Baseline LSTM:</strong> A simple recurrent neural network trained from scratch to capture sequential dependencies.</li>
                        <li><strong>Pretrained Transformer:</strong> Adapted transformer architecture for time series data, tested with and without additional features.</li>
                        <li><strong>Hybrid CNN-LSTM:</strong> CNN layers extracted local patterns from sequences followed by LSTM layers to model temporal dependencies.</li>
                        <li><strong>Attention-based LSTM:</strong> Integrated attention mechanisms to focus on the most relevant time steps.</li>
                    </ul>
                </div>
                <p><strong>Evaluation:</strong> Models were assessed using prediction accuracy for trend direction (up/down) and mean absolute error (MAE) on price predictions.</p>
                <p>The hybrid CNN-LSTM and attention-based models outperformed simple LSTMs, showing better ability to capture complex market patterns. This suggests combining spatial feature extraction and temporal attention enhances stock trend forecasting accuracy.</p>
            </div>
        </Section>

        <hr className="border-0 border-b-2 border-border" />

        <Section id="results">
            <div className="max-w-screen-md w-full mx-auto space-y-8 [&_*]:leading-relaxed [&_*]:text-lg">
                <h2 className="font-extrabold !text-4xl" style={{ fontFamily: "'Akira Expanded', sans-serif" }}>Results - Coming Soon</h2>
            </div>
        </Section>

        <hr className="border-0 border-b-2 border-border" />

        <Section id="discussion">
            <div className="max-w-screen-md mx-auto space-y-8 [&_*]:leading-relaxed [&_*]:text-lg">
                <h2 className="font-extrabold !text-4xl" style={{ fontFamily: "'Akira Expanded', sans-serif" }}>Discussion</h2>
                <p className="">The evaluation of various models suggests that deep learning methods, particularly LSTM networks, are highly effective for stock price prediction due to their ability to capture temporal dependencies in market data. Traditional models like Random Forest provide a useful baseline for trend prediction, showing reasonable performance that improves over longer forecast horizons.</p>
                <p className=""> Moving forward, we plan to combine price and trend forecasts into integrated models that can leverage both signals for better decision-making. Additionally, improving feature engineering—such as embedding stock codes instead of one-hot encoding—may enhance model performance. The exploration of recurrent architectures like RNNs will also be prioritized to further capture time series characteristics.</p>
                <p className="">In summary, while conventional models have their place, ensemble approaches centered around deep learning appear most promising for accurate and robust stock market forecasting. Continued refinement and experimentation will be crucial to develop practical tools for trading strategies and financial analysis.</p>
                
                <Link 
                    href="/projects" 
                    className="inline-block font-black uppercase text-xl bg-foreground text-background-secondary px-8 py-3 rounded-full"
                    style={{ fontFamily: "'Akira Expanded', sans-serif" }}
                >
                    Back
                </Link>
            </div>
        </Section>

        <Footer />
    </>
  )
}
