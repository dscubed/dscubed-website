// components/ProjectTemplate.jsx

import Navbar from '@/app/components/Navbar'

export default function ProjectTemplate() {
  return (
    <div>
        <Navbar></Navbar>

        <div className="grid grid-cols-2 gap-2 p-5 pl-20 pb-20">
            <div className="mt-40">
                <h1 className="text-[80px] leading-[100%] tracking-[0%] font-akira-expanded font-extrabold text-left mx-auto mb-8 uppercase">
                    Stock Forecasting
                </h1>
                <h2 className="font-akira-expanded font-bold text-[25px] leading-[100%] tracking-[0%] mb-20">
                    Using machine learning models to predict stock prices and market trends
                </h2>
                <p className="font-inter font-normal text-[24px] leading-[100%] tracking-[0%] leading-[32px] ">
                    Our project explores advanced machine learning techniques for stock market prediction by analyzing historical financial data to forecast both price and trend movements. We compare the performance of various models—including traditional regressors and deep learning architectures—and ultimately develop an ensemble stacking model for enhanced predictive accuracy. Leveraging techniques such as feature engineering, time-series preprocessing, and hyperparameter tuning, we aim to build a robust system for automated investment decision-making. This work underscores the potential of AI in financial forecasting, offering insights that support smarter trading strategies and risk management in volatile markets.
                </p>

                <a href="https://www.kaggle.com/datasets/jacksoncrow/stock-market-dataset" target="_blank" rel="noopener noreferrer">
                    <button className="mt-6 mb-10 bg-white text-black font-[800] text-[25px] leading-[100%] tracking-[0%] font-akira-expanded px-14 py-4 rounded-full w-max block text-left">
                        Dataset
                    </button>
                </a>

            </div>

            <img
                src="/projects/stock.png"
                className="w-full h-full object-cover"
                />
            <div>

            </div>
        </div>

        <div className="bg-[#2A2A2A] py-12 mt">
            <div className="flex justify-center gap-48 text-white text-[30px] font-akira-expanded font-[800] underline decoration-solid decoration-[1px] underline-offset-[2px]">
                <a href="#report" className="cursor-pointer">Report</a>
                <a href="#results" className="cursor-pointer">Results</a>
                <a href="#discussion" className="cursor-pointer">Discussion</a>
            </div>

        </div>

        <div className="px-40 py-16 mt-10">
        <section id="report">
        <h2 className="font-akira-expanded font-extrabold text-[50px] leading-[100%] tracking-[0%] mb-6 -mt-20">
            Report
        </h2>

        <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
            Predicting stock market trends is a challenging task due to the market’s volatility and complex patterns. Accurate forecasting of stock price movements can help investors make better decisions. Our project explores how deep learning models analyze historical stock data to predict future price trends.
        </p>

        <h3 className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-2">
            Methodology Overview
        </h3>

        <ul className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5 space-y-3">
            <li>
            <strong>Dataset:</strong> We used historical daily stock prices for 500 companies over the past 10 years, including open, close, high, low, and volume data. The dataset was split into training, validation, and test sets.
            </li>
            <li>
            <strong>Preprocessing:</strong> Data was normalized to handle different stock price scales. Technical indicators like moving averages and RSI (Relative Strength Index) were computed to enrich input features. Sliding windows created time-series sequences.
            </li>
            <li>
            <strong>Model Architecture:</strong> Four main deep learning models were tested:
            <ul className="list-disc list-inside ml-5 space-y-1">
                <li><strong>Baseline LSTM:</strong> A simple recurrent neural network trained from scratch to capture sequential dependencies.</li>
                <li><strong>Pretrained Transformer:</strong> Adapted transformer architecture for time series data, tested with and without additional features.</li>
                <li><strong>Hybrid CNN-LSTM:</strong> CNN layers extracted local patterns from sequences followed by LSTM layers to model temporal dependencies.</li>
                <li><strong>Attention-based LSTM:</strong> Integrated attention mechanisms to focus on the most relevant time steps.</li>
            </ul>
            </li>
            <li>
            <strong>Evaluation:</strong> Models were assessed using prediction accuracy for trend direction (up/down) and mean absolute error (MAE) on price predictions.
            </li>
        </ul>

        <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
            The hybrid CNN-LSTM and attention-based models outperformed simple LSTMs, showing better ability to capture complex market patterns. This suggests combining spatial feature extraction and temporal attention enhances stock trend forecasting accuracy.
        </p>
        </section>


        <section id="results">
        <h2 className="font-akira-expanded font-extrabold text-[50px] leading-[100%] tracking-[0%] mb-6">
            Results Summary
        </h2>

        <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
            Our project evaluated various deep learning approaches to classify lung cancer types from a dataset of 1,000 labeled CT scans, split into training, validation, and test sets for robust assessment. The scans were categorized into four classes: normal, adenocarcinoma, large-cell carcinoma, and squamous cell carcinoma.
        </p>

        <h3 className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-3">
            Model Performance
        </h3>
        <ul className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-6 list-disc list-inside space-y-2">
            <li>
            <strong>Convolutional Neural Networks (CNNs):</strong>  
            The baseline CNN model achieved a modest test accuracy of 45.4%, indicating the challenge of capturing complex features with a relatively shallow architecture. Using a pretrained CNN model (VGG-16) with data augmentation significantly boosted accuracy to 88.5%, highlighting the effectiveness of transfer learning and augmentation.
            </li>
            <li>
            <strong>Vision Transformer (ViT) Models:</strong>  
            Pretrained ViT models showed test accuracies ranging roughly from 33% to 45%, likely limited by dataset size. A hybrid CNN-transformer model improved accuracy up to 70%, especially on original images, but performance dropped with augmented or equalized images, showing sensitivity to preprocessing.
            </li>
        </ul>

        <h3 className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-3">
            Class-Specific Recall for Hybrid ViT
        </h3>
        <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-4">
            The hybrid ViT model excelled at identifying normal and adenocarcinoma cases, with recall rates up to 100% and 95.8% respectively. However, it struggled with squamous cell carcinoma and large-cell carcinoma, especially on augmented and equalized images, where recall dropped significantly.
        </p>

        <h3 className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-3">
            Key Takeaways
        </h3>
        <ul className="font-akira-expanded text-[16px] leading-[100%] tracking-[0%] mb-5 space-y-3 list-disc list-inside">
            <li>CNNs, especially pretrained models like VGG-16, outperform Vision Transformers on smaller datasets due to superior feature extraction.</li>
            <li>Data augmentation benefits CNN models but can reduce ViT and hybrid model performance, indicating a need for transformer-specific training strategies.</li>
            <li>The hybrid ViT shows promise by combining CNN and transformer strengths but requires further optimization to handle all classes robustly.</li>
            <li>Balancing false positives and negatives is critical for accurate lung cancer diagnosis and patient safety.</li>
        </ul>
        </section>



        <section id="discussion">
            <h2 className="font-akira-expanded font-extrabold text-[50px] leading-[100%] tracking-[0%] mb-6">
                Discussion
            </h2>
            <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
                The evaluation of various models suggests that deep learning methods, particularly LSTM networks, are highly effective for stock price prediction due to their ability to capture temporal dependencies in market data. Traditional models like Random Forest provide a useful baseline for trend prediction, showing reasonable performance that improves over longer forecast horizons.
            </p>
            <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
                Moving forward, we plan to combine price and trend forecasts into integrated models that can leverage both signals for better decision-making. Additionally, improving feature engineering—such as embedding stock codes instead of one-hot encoding—may enhance model performance. The exploration of recurrent architectures like RNNs will also be prioritized to further capture time series characteristics.
            </p>
            <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
                In summary, while conventional models have their place, ensemble approaches centered around deep learning appear most promising for accurate and robust stock market forecasting. Continued refinement and experimentation will be crucial to develop practical tools for trading strategies and financial analysis.
            </p>
            <a href="/projects" rel="noopener noreferrer">
                <button className="mt-16 mb-10 bg-white text-black font-[800] text-[25px] leading-[100%] tracking-[0%] font-akira-expanded px-10 py-3 rounded-full w-max block text-left">
                    Back
                </button>
            </a>
        </section>
        </div>
    </div>
  )
}
